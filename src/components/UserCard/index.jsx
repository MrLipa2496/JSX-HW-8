import React from "react";
import { connect } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { toggleFavourite } from "../../store/slices/userSlice";
import classNames from "classnames";
import styles from "./UserCard.module.sass";

function UserCard({ user, toggleFavourite }) {
  const heartClassName = classNames({
    [styles.favourite]: user.isFavourite,
    [styles.notFavourite]: !user.isFavourite,
  });

  const { firstName, lastName } = user;

  return (
    <div className={styles.userCard}>
      <h2 className={styles.userInfo}>
        {firstName} {lastName}
      </h2>
      <button className={styles.heartBtn} onClick={toggleFavourite}>
        <FaHeart className={heartClassName} />
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  toggleFavourite,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
