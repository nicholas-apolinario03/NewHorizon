function home() {
    return <html>
    <head>
      
        <link rel="stylesheet" type="text/css" href="style.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <title>NewHorizon</title>
    </head>
    <body>
        <span id='topo'></span> 
        <nav class="navbar" >
         
            <label for="check" class="checkbtn">
                <i class="fas fa-bars" ></i>
            </label>
            <a href="index.php"><label class="logo" > NewHorizon</label></a>
            <ul>
                <li><a class="bt" href="contato.html">Contato</a></li>
                <li><a class="bt" href="loja.html">Loja</a></li>
            </ul>	
            </nav>
        <section>
            <center>
                
                <center><p>clique na imagem para ver o projeto</p></center>
                <a href="smartglass.html" class="cont"><img src="./img/smart.jpg" height="400" width="300" /></a>
        </center>
        </section>
        <footer>
            
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.j"></script>
        <div id="voltarTopo">
            <a href="#" id="subir"><img src="./img/vtopo.png" height="40" width="50" /></a>
        </div>
      
    </body>
    </html> 

}
export default home