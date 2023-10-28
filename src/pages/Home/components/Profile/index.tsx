import * as S from './styles';
import { GithubLogo, Buildings, Users, LinkSimple } from 'phosphor-react';

export const Profile = () => {
  return (
    <S.Profile>
      <img src="https://github.com/drewdevelopment.png" alt="" />
      <S.Information>
        <h3>Andrew Gerez</h3>
        <p>Hi, my name is Andrew and I'm an 19 year old software developer at Watch Brasil.
          Passionate about technology and its aspects. I specialize in creating dynamic, easy-to-use
          interfaces that provide a seamless experience for users
        </p>

        <section>
          <S.Badge>
            <GithubLogo />
            drewdevelopment
          </S.Badge>

          <S.Badge>
            <Buildings weight='fill' />
            Watch Brasil
          </S.Badge>

          <S.Badge>
            <Users weight='duotone' />
            18 seguidores
          </S.Badge>
        </section>
      </S.Information>
      <span>
        <a href="https://github.com/drewdevelopment" target="_blank">
          GITHUB
        </a>
        <LinkSimple weight='bold' />
      </span>
    </S.Profile>
  );
}