import { describe, expect, it } from "vitest";
import { isPlaceholder, mapsHref, telHref } from "./links";

describe("guest links", () => {
  it("turns a real phone number into a callable tel: link", () => {
    expect(telHref("+45 12 34 56 78")).toBe("tel:+4512345678");
  });

  it("does not create a call link while the number is still a placeholder", () => {
    expect(telHref("[HOST PHONE NUMBER]")).toBeNull();
  });

  it("keeps short emergency numbers callable", () => {
    expect(telHref("112")).toBe("tel:112");
  });

  it("builds a Google Maps search link for an address", () => {
    expect(mapsHref("Main Street 1, Copenhagen")).toBe(
      "https://www.google.com/maps/search/?api=1&query=Main%20Street%201%2C%20Copenhagen",
    );
  });

  it("detects placeholders", () => {
    expect(isPlaceholder("[WI-FI PASSWORD]")).toBe(true);
    expect(isPlaceholder("sunflower42")).toBe(false);
  });
});
