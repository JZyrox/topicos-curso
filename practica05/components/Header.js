export default function Header({ title }) {
  const header = document.createElement('header');
  header.classList = 'header';
  header.innerHTML = ` 
        <h1 class='header-title'>${title}</h1>
        
    `;
  return header;
}