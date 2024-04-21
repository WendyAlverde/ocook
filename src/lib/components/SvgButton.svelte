<!-- SVG filter for creating a gooey effect -->
<svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true">
    <defs>
        <!-- Define the gooey filter -->
        <filter id="goo">
            <!-- Apply Gaussian blur to the source graphic -->
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
            <!-- Apply color matrix transformation to create the gooey effect -->
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <!-- Combine the original source graphic with the gooey effect -->
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
        </filter>
    </defs>
</svg>
