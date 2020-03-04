import React from 'react';
import '../style/splitscreen.css';
import before from '../img/ennen.jpg';
import after from '../img/jälkeen.jpg';

document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') !== -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        // Get the delta between the mouse position and center point.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
});

const Splitscreen = () => (
    <div>
        <div className="splitview skewed">
            <div className="panel bottom">
                <div className="content">
                    <div className="description">
                        <h1>Kulmakarvat ennen</h1>
                        <p></p>
                    </div>

                    <img src={before} alt="before" />
                </div>
            </div>

            <div className="panel top">
                <div className="content">
                    <div className="description">
                        <h1>Kulmakarvat jälkeen</h1>
                        <p></p>
                    </div>

                    <img src={after} alt="after" />
                </div>
            </div>

            <div className="handle"></div>
        </div>
    </div>

);

export default Splitscreen;