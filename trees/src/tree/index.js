import './index.css';

export default function Tree() {
  return (
    <div className="tree">
      <p>
        root
        <ul>
          <li>ant</li>
          <li>
            bear
            <ul>
              <li>cat</li>
              <li>
                dog
                <ul>
                  <li>elephant</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>frog</li>
        </ul>
      </p>
    </div>
  );
}
