import React, {FC} from "react";

const PinSVG: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  {...props}
    >
      <path
        d="M13.0583 19.7642C12.5912 19.7642 12.1512 19.5822 11.8213 19.2512L4.74962 12.1805C4.41857 11.8494 4.23657 11.4105 4.23657 10.9434C4.23657 10.4765 4.41857 10.0366 4.74962 9.70643L5.22457 9.23056C5.74457 8.71056 6.43449 8.42456 7.16945 8.42456H8.34037C8.67434 8.42456 8.98835 8.29456 9.22345 8.05854L12.0902 5.19177C12.3762 4.90577 12.4742 4.49068 12.3462 4.10764C12.0382 3.18171 12.2753 2.17778 12.9653 1.48878L13.9423 0.511944C14.6252 -0.170099 15.7341 -0.171197 16.417 0.511944L23.4879 7.58267C24.1709 8.26453 24.1709 9.37557 23.4879 10.0574L22.5109 11.0344C21.8208 11.7244 20.816 11.9604 19.8921 11.6535C19.509 11.5264 19.0939 11.6235 18.8079 11.9095L15.9412 14.7753C15.7051 15.0114 15.5751 15.3254 15.5751 15.6593V16.8303C15.5751 17.5652 15.2891 18.2551 14.7691 18.7751L14.2942 19.2501C13.9642 19.5822 13.5252 19.7642 13.0583 19.7642ZM7.16853 9.9256C6.83438 9.9256 6.52055 10.0554 6.28453 10.2914L5.81049 10.7664C5.71345 10.8645 5.71345 11.0225 5.81049 11.1205L12.8812 18.1912C12.9792 18.2892 13.1372 18.2892 13.2351 18.1912L13.7103 17.7163C13.9461 17.4803 14.0761 17.1662 14.0761 16.8323V15.6603C14.0761 14.9253 14.3621 14.2343 14.8821 13.7154L17.748 10.8495C18.437 10.1585 19.44 9.92157 20.367 10.2305C20.7499 10.3575 21.1659 10.2596 21.451 9.97449L22.4278 8.99747C22.5259 8.89952 22.5259 8.7415 22.4278 8.64354L15.3571 1.57282C15.2591 1.47486 15.1011 1.47578 15.0031 1.57282L14.0252 2.55075C13.7392 2.83675 13.6413 3.25183 13.7692 3.63469C14.0781 4.56062 13.8412 5.56364 13.1502 6.25356L10.2843 9.1196C9.76634 9.6396 9.07532 9.9256 8.34037 9.9256H7.16853Z"
        fill="white"
      />
      <path
        d="M0.750759 23.9999C0.558688 23.9999 0.3668 23.9268 0.219772 23.7798C-0.0722705 23.4869 -0.0722704 23.0119 0.220688 22.7189L8.2904 14.6591C8.58244 14.3673 9.05832 14.3662 9.35146 14.6602C9.64332 14.9532 9.64332 15.4281 9.35036 15.7211L1.28065 23.7809C1.13472 23.9268 0.942646 23.9999 0.750759 23.9999Z"
        fill="white"
      />
    </svg>
  );
};

export default PinSVG;