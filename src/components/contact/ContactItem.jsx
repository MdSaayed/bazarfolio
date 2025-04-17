const ContactItem = ({ icon, title, subtitle })=> {
    return (
      <div className="flex items-center gap-6">
        <div className="bg-white text-black rounded-full w-[56px] h-[56px] flex items-center justify-center p-3 text-xl">{icon}</div>
        <div className="space-y-3">
          <h4 className="text-xl font-semibold text-white text-base">{title}</h4>
          <p className="text-base text-white leading-normal">{subtitle}</p>
        </div>
      </div>
    );
  }

  export default ContactItem;