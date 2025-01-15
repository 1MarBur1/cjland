import CrossIcon from "@/assets/cross.svg";

const Snackbar = ({ show, onClick }: { show: boolean, onClick: () => void }) => {
	return (
		<div className={"fixed flex z-50 duration-500 items-center gap-3 justify-center bottom-12 text-white font-extrabold py-4 px-4 rounded-xl bg-[#1C1C25] " + ( show ? "left-12" : "-left-96")}>
			Ссылка скопирована
			<button onClick={onClick}>
				<CrossIcon />
			</button>
		</div>
	)
}

export default Snackbar;
