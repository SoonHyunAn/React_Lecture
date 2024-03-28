import '../apps/App.css';

export default function Card2(props) { // props = properties
  return (
    <>
      <h1 style={{ backgroundColor: "beige" }}>name: {props.person.name}</h1>
      <hr />
      <img src={`https://picsum.photos/200/200?q=${props.person.id}`} className="photo" alt="자동생성사진" />
      <br />
      <h3>job: {props.person.job}</h3>
    </>
  );
}