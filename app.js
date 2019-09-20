var scream = new Audio('scream.mp3')
var i = 0
var loop = false

function screamLoop() {
    setTimeout(function(){
        if(loop){
            setTimeout(function() {
                document.getElementById('scream').innerHTML = ''    
            }, 500)
            return
        }

        document.getElementById('scream').innerHTML += 'A'

        i++
        
        if (i % 50 === 0) {
            document.getElementById('scream').innerHTML += '<br/>'
        }
        screamLoop()
    }, 10)
}

window.onload = function() {
    const mouth = document.getElementById('mouth')
    
    mouth.addEventListener('mouseover', function() {
        setTimeout(function() {
            loop = false
            document.getElementById('tongue').style.height = '20px'
            document.getElementById('tongue').style.opacity = 1
            document.getElementById('tongue').style.marginTop = '30px'
            scream.play()
            document.getElementById('scream').style.display = 'block'
            screamLoop()
        }, 550)
    })

    mouth.addEventListener('mouseout', function() {
        document.getElementById('tongue').style.opacity = 0
        document.getElementById('tongue').style.height = '0px'
        document.getElementById('tongue').style.marginTop = '50px'
        scream.pause()
        scream.currentTime = 0
        loop = true
    })
}