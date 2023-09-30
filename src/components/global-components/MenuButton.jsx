export const MenuButton = ({ isMenuOpen, setIsMenuOpen }) => {

  const handleOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="menu" onClick={handleOpen}>
        <div className={isMenuOpen ? "bar1-active" : "bar1"} />
        <div className={isMenuOpen ? "bar2-active" : "bar2"} />
        <div className={isMenuOpen ? "bar3-active" : "bar3"} />
      </div>
    </>
  );
};
