const TextInfoList = ({ icon, children }: React.PropsWithChildren<{ icon: React.ReactNode }>) => {
    return (
        <div css={{ display: "flex", "margin-top": "16px" }}>
            <div css={{ "flex-shrink": 0, "margin-right": "1rem", width: "40px" }}>{icon}</div>
            <div>{children}</div>
        </div>
    );
};

export default TextInfoList;
