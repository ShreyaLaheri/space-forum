export default function Select() {
  return (
    <div>
      <br />

      <br />
      <br />
      <br />
      <div className="columns">
        <div className="column col-xs-7 col-sm-8 col-md-6 col-lg-11">
          <div className="padding a">
            <div className="has-icon-left">
              <input type="text" className="form-input" placeholder="Search" />
              <i className="form-icon icon icon-search"></i>
            </div>
          </div>
        </div>

        <div className="column col-xs-5 col-sm-4 col-md-6 col-lg-1">
          <div className="dropdown">
            <div className="btn-group">
              <a
                href="#"
                className="btn btn-primary hide-sm  dropdown-toggle"
                tabIndex="0"
              >
                Category
                <i className="icon icon-arrow-down" />
              </a>
              <ul className="menu">
                <a href="#">General</a>
              </ul>
            </div>
          </div>
          <button className="btn hide-sm">
            {" "}
            <i className="icon icon-plus" />
            New Topic
          </button>
          <button className="btn btn-action show-sm">
            <i className="icon icon-plus a"></i>
          </button>
          <button className="btn btn-action show-sm a">
            <div className="diva"></div>
            <div className="div"></div>
            <div className="divb"></div>
          </button>
        </div>
      </div>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </div>
  );
}
