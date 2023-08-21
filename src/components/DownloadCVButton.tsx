import { cv, cvpdf } from "../assets";

const DOWNLOAD_TITLE = "Currículum Enrique De La Concepción.pdf";

export function DownloadCVButton() {
	return (
		<a href={cvpdf} download={DOWNLOAD_TITLE}>
			<img className="w-[32px] h-[32px]" src={cv} alt="Download CV" />
		</a>
	);
}
