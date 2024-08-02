import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigation = useNavigate();
  return (
    <div className={styles.mapContainer} onClick={() => navigation("form")}>
      <h1>map</h1>
      <h1>
        Position : {lat},{lng}
      </h1>
    </div>
  );
}

export default Map;
