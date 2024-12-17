function calculateAxleWeights() {
    // Constants
    const g = 9.81; // Acceleration due to gravity (m/s²)

    // Input values
    const W = parseFloat(document.getElementById("totalWeight").value);
    const theta = parseFloat(document.getElementById("theta").value) * (Math.PI / 180); // Convert degrees to radians
    const c = parseFloat(document.getElementById("c").value); // Distance 'c'
    const L = parseFloat(document.getElementById("L").value); // Wheelbase
    const b = parseFloat(document.getElementById("b").value); // Distance 'b'
    const Rhx = parseFloat(document.getElementById("rhx").value); // Horizontal force
    const Rhz = parseFloat(document.getElementById("rhz").value); // Vertical force
    const dh = parseFloat(document.getElementById("dh").value); // Height distance 'dh'
    const hh = parseFloat(document.getElementById("hh").value); // Height to hitch 'hh'
    const ax = parseFloat(document.getElementById("ax").value); // Acceleration 'ax'
    const h = parseFloat(document.getElementById("h").value); // Center of gravity height 'h'
    const ha = parseFloat(document.getElementById("ha").value); // Aerodynamic force height 'ha'
    const DA = parseFloat(document.getElementById("da").value); // Aerodynamic drag force 'DA'

    // Input validation
    if (isNaN(W) || isNaN(theta) || isNaN(c) || isNaN(L) || isNaN(b) || isNaN(Rhx) || isNaN(Rhz) || isNaN(dh) || isNaN(hh) || isNaN(ax) || isNaN(h) || isNaN(ha) || isNaN(DA)) {
        alert("Please enter valid inputs for all fields.");
        return;
    }

    // Front Axle Weight Calculation (W_f)
    const Wf = (W * c * Math.cos(theta) - Rhx * hh - Rhz * dh - (W / g) * ax * h - DA * ha - W * h * Math.sin(theta)) / L;

    // Rear Axle Weight Calculation (W_r) - Corrected
    const Wr = (W * b * Math.cos(theta) + Rhx * hh + Rhz * (dh + L) + (W / g) * ax * h + DA * ha + W * h * Math.sin(theta)) / L;

    // Display Results
    document.getElementById("frontAxleWeight").textContent = Wf.toFixed(2);
    document.getElementById("rearAxleWeight").textContent = Wr.toFixed(2);
}
