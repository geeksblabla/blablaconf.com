import App from "next/app";
import { DefaultSeo } from "next-seo";
import NProgress from "nprogress";
import Router from "next/router";
import GlobalStyle from "theme/global";
import "nprogress/nprogress.css";
import "theme/font.css";
import "reactjs-popup/dist/index.css";
import SEO from "config/next-seo.config.js";

Router.events.on("routeChangeStart", () => {
	NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<GlobalStyle />
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
			</>
		);
	}
}
