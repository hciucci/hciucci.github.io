window.onload = function() {
    const drawBtn = document.getElementById('drawBtn');
    const starInput = document.getElementById('stars');
    const errorMessage = document.getElementById('error-message');
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');

    // set canvas size
    canvas.width = 400;
    canvas.height = 400;

    // draw stars
    function drawStars(numStars) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
        for (let i = 0; i < numStars; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            drawStar(ctx, x, y, 5, 10, 5);  
        }
    }

    // draw single star
    function drawStar(ctx, x, y, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let cx = x;
        let cy = y;
        let step = Math.PI / spikes;

        ctx.strokeStyle = "yellow";
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
            rot += step;
            ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fill();
    }

    // validate input and draw stars
    drawBtn.addEventListener('click', function() {
        const numStars = parseInt(starInput.value, 10);

        if (isNaN(numStars) || numStars <= 0) {
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.classList.add('hidden');
            drawStars(numStars);
        }
    });

    // log canvas click coordinates
    canvas.addEventListener('click', function(event) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        console.log(`Clicked at position X: ${x}, Y: ${y}`);
    });
};
