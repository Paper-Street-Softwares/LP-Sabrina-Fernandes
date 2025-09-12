import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import TeamMember from "../cards/TeamMember";
import { useTranslation } from "react-i18next";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Team() {
  const { t } = useTranslation();

  return (
    <SectionArea className="bg-bgSectionDark">
      <SectionHeader
        className="text-center"
        miniTitle={t("team.minitag")}
        sectionHeaderTitle={t("team.title")}
        sectionHeaderSubtitle={t("team.subtitle")}
        titleColorSet="text-white"
        subtitleColorSet="text-white"
      />

      <SectionWrapper>
        <MotionDivDownToUp>
          <div className="flex flex-col gap-10 m-auto w-full">
            {/* Primeira linha de membros */}
            <div className="flex flex-wrap justify-center gap-4 tablet2:gap-10 items-center ">
              <div className="">
                <TeamMember
                  img={content.texts.team.members.member1.img.img}
                  alt={content.texts.team.members.member1.img.alt}
                  name={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: t("team.members.member1.name"),
                      }}
                    />
                  }
                  role={t("team.members.member1.role")}
                />
              </div>
              <div className="">
                <TeamMember
                  img={content.texts.team.members.member2.img.img}
                  alt={content.texts.team.members.member2.img.alt}
                  name={t("team.members.member2.name")}
                  role={t("team.members.member2.role")}
                />
              </div>
            </div>
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
