

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="pb-10 space-y-2 text-center">
            <h4 className="text-[#333333] text-3xl font-semibold">{title}</h4>
            <p className="text-[#333333] text-[15px] font-light ">{subTitle}</p>

        </div>
    );
};

export default SectionTitle;
