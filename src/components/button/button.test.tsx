import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./button.tsx";

describe("Button", () => {
    it("Calls onClick when clicked", async () => {
        // Set up a mock function that we can spy on
        const onClick = vi.fn();

        // Render the component and click it
        render(<Button label="Click me" onClick={onClick} />);
        fireEvent.click(screen.getByTestId("button"));

        // Assert that the mock function was called
        expect(onClick).toHaveBeenCalled();
    });
});
