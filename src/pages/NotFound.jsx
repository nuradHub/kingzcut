import { Link } from "react-router-dom";

const NotFound = ()=> {
  return (
    <div style={{ textAlign: "center", padding: "50px", display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h3>404 - Page Not Found</h3>
      <p>The page you are looking for doesn’t exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound
