export const Biodata: React.FC = (): React.ReactElement => {
    return (
        <div
            style={{
                width: "inherit",
                height: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px"
            }}
        >
        <iframe
            src={import.meta.env.VITE_APP_GFORM_BIODATA_LINK}
            width="640"
            height="1925"
            title="Biodata Form"
        >
            Loading…
        </iframe>
        </div>
    );
};

export default Biodata;