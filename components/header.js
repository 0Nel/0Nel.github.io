/* header encapsulation taken from:
   https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
*/

const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    /* define unordered list style for menu bar */
    .menu-ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333333;
    }
    .menu-li {
      font-size: 135%;
      float: left;
    }
    .dropbtn {
      display: inline-block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      overflow: auto;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      padding: 12px 16px;
      z-index: 1;
    }
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }
    
    .menu-li:hover, .dropdown:hover .dropbtn {background-color: red;}
    .dropdown:hover .dropdown-content {display: block;}
    .dropdown-content a:hover {background-color: #e1e1e1}
  </style>

  <header>
    <ul class="menu-ul">
      <li class="menu-li dropdown"href="#home">
        <a href="/index.html" class="dropbtn"><b>my2ndBrain</b></a>
        <div class="dropdown-content">
          <a href="pages/my2ndBrain/learn_html.html">Learn HTML</a>
          <a href="#">Archive Useful Knowledge</a>
          <a href="#">Blog</a>
          <a href="#">Lifelong learning && backup my brain</a>
        </div>
      </li>
      <li class="menu-li dropdown"href="#programming">
        <a href="javascript:void(0)" class="dropbtn"><b>Programming</b></a>
        <div class="dropdown-content">
          <a href="pages/programming/cpp.html">C++</a>
          <a href="#">ROS</a>
          <a href="#">Docker</a>
          <a href="pages/programming/bash.html">Bash</a>
          <a href="pages/programming/telegram_bots.html">Telegram Bots</a>
          <a href="pages/programming/ruby.html">ruby</a>
        </div>
      </li>
      <li class="menu-li dropdown"href="#unix">
        <a href="javascript:void(0)" class="dropbtn"><b>Unix</b></a>
        <div class="dropdown-content">
          <a href="#">cronjobs</a>
          <a href="#">boot services</a>
          <a href="pages/programming/bash.html">Bash</a>
          <a href="pages/unix/alias.html">Alias Collection</a>
          <a href="pages/unix/device_management.html">device management</a>
          <a href="pages/unix/network.html">Network</a>
          <a href="pages/unix/ffmpeg.html">ffmpeg</a>
        </div>
      </li>
      <li class="menu-li dropdown"href="#tinkering">
        <a href="javascript:void(0)" class="dropbtn"><b>Tinkering</b></a>
        <div class="dropdown-content">
          <a href="pages/tinkering/pi-projects.html">Pi-Projects</a>
          <a href="pages/tinkering/electronics.html">Electronics</a>
          <a href="pages/tinkering/wood-working.html">Wood working</a>
        </div>
      </li>
      <li class="menu-li dropdown"href="#blender">
        <a href="javascript:void(0)" class="dropbtn"><b>Blender</b></a>
        <div class="dropdown-content">
          <a href="#">Tutorial Link Collection</a>
          <a href="#">Knowledge Pool</a>
        </div>
      <li class="menu-li dropdown"href="#whoami">
        <a href="javascript:void(0)" class="dropbtn"><b>whoami</b></a>
        <div class="dropdown-content">
          <a href="https://github.com/0Nel" target="_blank">github</a>
          <a href="https://www.researchgate.net/profile/Leon-Danter" target="_blank">researchgate</a>
          <a href="https://robotik.dfki-bremen.de/de/ueber-uns/mitarbeiter/leda01.html" target="_blank">DFKI</a>
          <a href="pages/whoami/publications.html" target="_blank">Paper</a>
        </div>
    </ul>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
