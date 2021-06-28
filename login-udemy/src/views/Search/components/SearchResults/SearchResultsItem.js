export default function SearchResultItem({ name, email }) {
  return(
    <div style={{ 
      backgroundColor: "#E8E7E7", 
      marginTop: "1rem", 
      margingBottom: "1rem", 
      padding: 20,
      width: "100%" 
    }}>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}