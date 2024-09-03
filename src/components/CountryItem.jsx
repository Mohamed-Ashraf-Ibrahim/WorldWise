/* eslint-disable react/prop-types */
import { useFlagEmoji } from "../hooks/useFlagEmoji";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const flagemojiToPNG = useFlagEmoji();
  return (
    <li className={styles.countryItem}>
      <img src={flagemojiToPNG(country.emoji)} alt="flag" />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
