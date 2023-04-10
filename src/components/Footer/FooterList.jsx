import {
  FeaturesList,
  Feature,
} from './Footer.styled';

export const FooterList = () => {
  return (
        <FeaturesList>
           <Feature>Database of recipes that can be replenished </Feature>
           <Feature>Flexible search for desired and unwanted ingredients </Feature>
           <Feature>Ability to add your own recipes with photos</Feature>
           <Feature>Convenient and easy to use</Feature>
        </FeaturesList>
  );
};
