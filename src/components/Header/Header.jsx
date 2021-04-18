import Button from "../Button/Button";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div className="container border border-danger rounded mb-4 p-4">
      <div className="row">
        <div className="col-8">
          <Logo />
        </div>
        <div className="col">
          <h1>Dmitrii</h1>
        </div>
        <div className="col align-self-center">
          <Button text="Logout" />
        </div>
      </div>
    </div>
  );
}

export default Header;
