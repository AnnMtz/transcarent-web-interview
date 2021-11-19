import useNames from '../hooks/useNames';

export default function Animals() {
  const animals = useNames();

  //Here I create a recursive function
  const RecursiveComponent = ({ name, items }) => {
    const hasChildren = item && items.length;
    console.log(hasChildren);

    return (
      <>
        <p>{name}</p>
        <div>
          <ul>
            <il>
              {hasChildren > 0 &&
                items.map((item) => (
                  <RecursiveComponent name={item.name} {...items} />
                ))}
            </il>
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="tree">
      <RecursiveComponent {...animals} />
    </div>
  );
}
