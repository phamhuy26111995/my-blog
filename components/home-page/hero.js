import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/huy-pham.png"
                    alt="Ảnh của Phạm Huy"
                    width={400}
                    height={400}
                />
            </div>

            <h1>Xin chào , Mình là Phạm Huy</h1>
            <p>
                Đây là một project nhỏ của mình được viết bằng nextjs
            </p>

        </section>
    );
}

export default Hero;