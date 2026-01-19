import Image from "next/image";

function Home() {
  return (
    <div>
      <h1>Que resenha😂🚨</h1>
      <Image
        src="/fotoqueresenhaplus.jpeg"
        alt="perfil do que resenha"
        width={300}
        height={300}
      />
    </div>
  );
}

export default Home;
