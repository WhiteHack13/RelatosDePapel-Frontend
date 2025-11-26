/// <reference types="cypress" />

describe("Pruebas de Inicio de Sesión", () => {
  beforeEach(() => {
    cy.visit("/login"); // Asegúrate de que "/login" sea la ruta correcta
    cy.wait(1000); // Espera 1 segundo antes de cada prueba
  });

  it("Debe mostrar un error si las credenciales son incorrectas", () => {
    cy.get('input[type="text"]').type("incorrecto");
    cy.wait(500); // Espera medio segundo entre cada acción
    cy.get('input[type="password"]').type("incorrecto");
    cy.wait(500);
    cy.get("button.login-btn").click();
    cy.wait(1000); // Espera 1 segundo antes de la verificación

    cy.get(".error-message")
      .should("be.visible")
      .and("contain", "Credenciales incorrectas");
  });

  it("Debe permitir el inicio de sesión como usuario normal", () => {
    cy.get('input[type="text"]').type("user");
    cy.wait(500); // Espera medio segundo entre cada acción
    cy.get('input[type="password"]').type("user");
    cy.wait(500);
    cy.get("button.login-btn").click();
    cy.wait(1000); // Espera 1 segundo antes de la verificación

    cy.url().should("include", "/main");
  });

  it("Debe permitir el inicio de sesión como administrador", () => {
    cy.get('input[type="text"]').type("admin");
    cy.wait(500); // Espera medio segundo entre cada acción
    cy.get('input[type="password"]').type("admin");
    cy.wait(500);
    cy.get("button.login-btn").click();
    cy.wait(1000); // Espera 1 segundo antes de la verificación

    cy.url().should("include", "/admin");
  });

  it("Debe permitir hacer clic en el enlace de registro", () => {
    cy.get(".redirect-text a").click();
    cy.wait(1000); // Espera 1 segundo antes de la verificación
    cy.url().should("include", "/register");
  });
});
