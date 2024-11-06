


const heading = ({title,subtitle}) => {
    return (
    <div className="w-full text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{subtitle}</p>
    </div>
    );
};

export default heading;