type Props = {};

const MapContainer = (props: Props) => {
  return (
    <div className="flex h-[350px] w-[90%] items-center justify-center sm:w-[80%] md:h-[500px] md:w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.66786520958!2d139.75022457558248!3d35.6851793297575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d8064d%3A0xd11a5f0b379e6db7!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1708513184757!5m2!1sja!2sjp"
        loading="lazy"
        className="flex h-full w-full"
        title="googleMap"
      ></iframe>
    </div>
  );
};

export default MapContainer;
