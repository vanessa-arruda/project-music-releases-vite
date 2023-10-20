
export const Header = () => {
    const header = "The Sound of the Week";
    const subtitle = "What is yours?"
    return (
        <header className="header">
            <div></div>
            <h1 id="title">{header}</h1>
            <p id="subtitle">{subtitle}</p>
        </header>
    );
};