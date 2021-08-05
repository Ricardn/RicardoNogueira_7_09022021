import "./searchbar.scss";
import {
  Search
} from "@material-ui/icons";

export default function searchBar() {
  return (
    <div className="topbarCenter">
      <div className="searchbar">
        <Search className="searchIcon" />
        <input placeholder="Rechercher" className="searchInput" />
      </div>
    </div>
  );
}