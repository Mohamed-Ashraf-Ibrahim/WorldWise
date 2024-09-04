/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useFlagEmoji } from "../hooks/useFlagEmoji";

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useCities();
  const flagemojiToPNG = useFlagEmoji();

  // function for formatting date
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  // function to handle delete function
  function handleClick(e) {
    e.preventDefault();
    if (window.confirm(`Are you sure to delete ${cityName} city ?`)) {
      deleteCity(id);
    }
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>
          <img src={flagemojiToPNG(emoji)} alt="flag" />
        </span>
        <h4 className={styles.name}>{cityName}</h4>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
