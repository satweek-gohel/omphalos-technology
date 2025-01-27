'use client';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/OurTeam.module.css';
import { getMembersList } from '../api/comman';
import { BaseViewImageURL } from '../api/service';

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true); 
  


  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const memmbersData = await getMembersList();
        setTeamMembers(memmbersData.data.data);
      } catch (error) {
        console.error( error);
      } finally {
        setLoading(false);  
      }
    };
  
    fetchTeamData();
  }, []);
  


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.teamSection}>
      <Container>
        <div className={styles.headingContainer} data-aos="fade-up">
          <h2 className={styles.heading}>EXPERT TEAM</h2>
          <p className={styles.subHeading}>Meet Our Leadership</p>
          <div className={styles.line}></div>
        </div>

        {loading ? (
          <div className={styles.loadingSpinner}>Loading...</div> 
        ) : (
          <Slider {...sliderSettings}>
            {teamMembers.map((member, index) => (
              <div key={member.id} className={styles.teamMemberCol}>
                <div className={styles.teamMember} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                  <div className={styles.imageWrapper}>
                    <img
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src="/NoImageFound.png";
                              }}
                      src={member.profile_image ? `${BaseViewImageURL}${member.profile_image}` : 'https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg'} 
                      className={styles.teamImage}
                    />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3>{member.name}</h3>
                    <p className={styles.role}>{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </Container>
    </section>
  );
};

export default OurTeam;
