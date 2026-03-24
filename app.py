from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/registrar', methods=['POST'])
def registrar():
    nombre = request.form.get('nombre')
    cedula = request.form.get('cedula')
    telefono = request.form.get('telefono')
    
    with open("usuarios_registrados.txt", "a") as f:
        f.write(f"Nombre: {nombre} | CI: {cedula} | Tel: {telefono}\n")
    
    return render_template('index.html', registro_exitoso=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
