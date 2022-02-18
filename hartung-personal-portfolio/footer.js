class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <div id="quick-links">
                    <ul id="quick-links-ul">
                        <li><a href="https://github.com/jhartung/web-330">My GitHub Repository</a></li>
                        <span>|</span>
                        <li><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University Web Development Degree</a></li>
                        <span>|</span>
                        <li><a href="https://www.youtube.com/c/bellevueuniversity">Bellevue University YouTube Channel</a></li>
                        <span>|</span>
                        <li><a href="https://github.com/buwebdev/web-330">Web 330: JavaScript II Course GitHub Repository</a></li>
                    </ul>
                </div>
                <hr />
                <p id="copyright">
                    Copyright &copy; 2022 <a href="index.html">Joel Hartung</a>
                </p>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);
