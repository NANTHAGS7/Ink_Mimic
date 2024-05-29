from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from flask_cors import cross_origin
import pdfplumber
app = Flask(__name__)
CORS(app)

OPENAI_API_KEY = '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'
api_key = OPENAI_API_KEY
client = OpenAI(api_key=api_key)

def generate_answer(user_input, author, tone):
    prompt = f"convert the following : {user_input}. into {author} style and the convertion should be in {tone} and just convert don't explain and display one style"
    
    response = client.chat.completions.create(
        model="gpt-4",  # Use the appropriate GPT-3 model
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt},
        ],
    )
    return response.choices[0].message.content

@app.route('/predict', methods=['POST'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def handle_prediction():
    data = request.get_json()
    user_input = data.get('text', '')
    author = data.get('author', '')
    tone = data.get('tone', '')

    result = generate_answer(user_input, author, tone)
    return jsonify(result)

@app.route('/pdf',methods=['POST'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def handle_pdf():
    try:
        # if 'file' not in request.files:
        #     return jsonify({'error': 'No file part'})
        arr=[]
        pdf_file = request.files['pdf']
        if pdf_file.filename == '':
            return jsonify({'error': 'No selected file'})

        if pdf_file:
            with pdfplumber.open(pdf_file) as pdf:
                # Extract text from all pages of the PDF
                 for page in pdf.pages:
                    extracted_text = page.extract_text()

            # Split the text into sentences based on full stops
                    sentences = extracted_text.split('.')

            # Remove empty strings from the list
                    sentences = [sentence.strip() for sentence in sentences if sentence.strip()]

            # Add the sentences to the array
                    arr.extend(sentences)

                

            return jsonify({'text_from_pdf': arr})
        else:
            return jsonify({'error': 'Invalid file format'})
    except Exception as e:
        return jsonify({'error': str(e)})
    

if __name__ == '__main__':
    app.run(debug=True)