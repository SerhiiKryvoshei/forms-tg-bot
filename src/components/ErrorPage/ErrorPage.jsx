import { useRouteError, Link } from "react-router-dom";

import styles from "./ErrorPage.module.scss";

export default function ErrorPage() {
	const error = useRouteError();
	// console.error(error);

	return (
		<div className={styles.inner}>
			<p className={styles.title}>Oops!</p>
			<p className={styles.text}>Sorry, an unexpected error has occurred.</p>
			<p className={styles.err}>
				<i>{error.statusText || error.message}</i>
			</p>
			<p className={styles["link-home"]}>
				Go <Link to="/">home</Link>
			</p>
		</div>
	);
}
