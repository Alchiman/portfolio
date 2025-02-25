import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Container className="main">
        <Row>
          <Col>
            <p className="description">
              I&apos;m Alireza, a Full Stack Developer with a passion for
              solving complex problems. My journey began in product design,
              which gifted me with a unique perspective I bring to every line of
              code I write. I see technology through the lens of the people who
              use it, allowing me to bridge the gap between technical solutions
              and human needs in ways that many developers can&apos;t.
            </p>
            <p>
              What truly drives me is the challenge of figuring things out – I
              thrive when faced with unfamiliar systems, technologies, or
              problems that need solving. Throughout my career, I&apos;ve prided
              myself on quickly adapting to new environments and technologies,
              often becoming the go-to person for untangling complex issues.
              Whether it&apos;s optimizing databases, streamlining API
              interactions, or crafting intuitive user interfaces, I have a
              knack for seeing beyond the immediate problem to find elegant,
              lasting solutions.
            </p>
            <p>
              My background spans both design and development roles, giving me a
              versatile toolkit that includes JavaScript, Ruby, React,
              TypeScript, Rails, and more. But beyond the technical skills
              listed on my resume, what defines me is my approach – curious,
              determined, and always focused on the people behind the screens.
              I&apos;ve designed and developed everything from custom
              communication hardware to reusable component libraries, always
              guided by the belief that technology should serve people, not the
              other way around. With every project, I strive to create solutions
              that balance technical excellence with a genuinely human touch,
              making complex systems feel simple and intuitive for everyone
              involved.
            </p>
          </Col>
          <Col className="img__col">
            <Image
              src="/img.jpeg"
              alt="Profile picture of Alireza"
              width={500}
              height={750}
              className="profile__img"
              priority
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default about;
