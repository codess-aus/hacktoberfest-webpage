import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('app-about')
export class AppAbout extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>About Page</h2>
        <section>
        <h3>Lorem</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam leo nec sem consectetur, vel aliquet massa condimentum. Etiam at dapibus orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam metus, lobortis sed volutpat id, elementum sed nibh. Nullam lacinia augue et pretium congue. Ut eleifend hendrerit ultricies. Ut hendrerit tellus porttitor purus convallis fermentum. Aenean cursus lacus libero, non maximus odio mattis quis. In a lorem tincidunt, lobortis ipsum sed, mattis sem. Morbi sapien dolor, sollicitudin eget libero ut, feugiat auctor tortor.</p>
        </section>
        <section>
        <h3>Lorem</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam leo nec sem consectetur, vel aliquet massa condimentum. Etiam at dapibus orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam metus, lobortis sed volutpat id, elementum sed nibh. Nullam lacinia augue et pretium congue. Ut eleifend hendrerit ultricies. Ut hendrerit tellus porttitor purus convallis fermentum. Aenean cursus lacus libero, non maximus odio mattis quis. In a lorem tincidunt, lobortis ipsum sed, mattis sem. Morbi sapien dolor, sollicitudin eget libero ut, feugiat auctor tortor.</p>
        </section>
        <section>
        <h3>Lorem</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam leo nec sem consectetur, vel aliquet massa condimentum. Etiam at dapibus orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam metus, lobortis sed volutpat id, elementum sed nibh. Nullam lacinia augue et pretium congue. Ut eleifend hendrerit ultricies. Ut hendrerit tellus porttitor purus convallis fermentum. Aenean cursus lacus libero, non maximus odio mattis quis. In a lorem tincidunt, lobortis ipsum sed, mattis sem. Morbi sapien dolor, sollicitudin eget libero ut, feugiat auctor tortor.</p>
        </section>
      </div>
    `;
  }
}
