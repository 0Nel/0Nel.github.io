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
        <a href="javascript:void(0)" class="dropbtn"><b>my2ndBrain</b></a>
        <div class="dropdown-content">
          <a href="#">Learn HTML</a>
          <a href="#">Archive Useful Knowledge</a>
          <a href="#">Lifelong learning && backup 101</a>
        </div>
      </li>
      <li class="menu-li dropdown"href="#programming">
        <a href="javascript:void(0)" class="dropbtn"><b>Programming</b></a>
        <div class="dropdown-content">
          <a href="#">C++</a>
          <a href="#">ROS</a>
          <a href="#">Docker</a>
          <a href="#">Bash</a>
          <a href="#">Telegram Bots</a>
        </div>
      </li>
      <li class="menu-li dropdown"href="#unix">
        <a href="javascript:void(0)" class="dropbtn"><b>Unix</b></a>
        <div class="dropdown-content">
          <a href="#">cronjobs</a>
          <a href="#">boot services</a>
          <a href="#">Bash</a>
          <a href="#">Alias Collection</a>
          <a href="#">Network</a>
        </div>
      </li>
      <li class="menu-li dropdown"href="#tinkering">
        <a href="javascript:void(0)" class="dropbtn"><b>Tinkering</b></a>
        <div class="dropdown-content">
          <a href="#">Pi-Projects</a>
          <a href="#">Electronics</a>
        </div>
      </li>
      <li class="menu-li dropdown"href="#blender">
        <a href="javascript:void(0)" class="dropbtn"><b>Blender</b></a>
        <div class="dropdown-content">
          <a href="#">Tutorial Link Collection</a>
          <a href="#">Knowledge Pool</a>
        </div>
      <li class="menu-li dropdown dropbtn"href="#about"><b>whoami</b></li>
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
