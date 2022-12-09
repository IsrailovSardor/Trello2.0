import App from "../../App";
const {render, screen} = require("@testing-library/react");
const {MemoryRouter} = require("react-router-dom");

test("should first", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});
