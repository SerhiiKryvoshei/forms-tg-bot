import classnames from "classnames";
// import { useEffect } from "react";
// import { useTelegram } from "../../hooks/useTelegram.js";
import { data } from "../../data/data";

import Header from "../Header/Header";
import Form from "../Form/Form";

import styles from "./App.module.scss";

function App() {
	// const { tg } = useTelegram();
	// useEffect(() => {
	// 	tg.ready();
	// }, [tg]);

	const { titleForm, subTitleForm } = data;

	return (
		<div className={classnames(styles["App"])}>
			<Header />
			<h1 className="title">{titleForm}</h1>
			<p>{subTitleForm}</p>
			<Form />
		</div>
	);
}

export default App;
