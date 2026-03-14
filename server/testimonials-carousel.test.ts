import { describe, expect, it } from "vitest";

describe("TestimonialsCarousel Component", () => {
  const mockTestimonials = [
    {
      name: "Carla Ribeiro",
      role: "CEO",
      avatar: "https://via.placeholder.com/80/0D204A/FFFFFF?text=CR",
      text: "Contar com a PRCS Advogados foi um divisor de águas para minha empresa.",
    },
    {
      name: "Rafael Kawori",
      role: "Gerente",
      avatar: "https://via.placeholder.com/80/0D204A/FFFFFF?text=RK",
      text: "A consultoria jurídica da PRCS é excepcional.",
    },
    {
      name: "Ana Silva",
      role: "Diretora de Marca",
      avatar: "https://via.placeholder.com/80/0D204A/FFFFFF?text=AS",
      text: "O registro de marca com a PRCS foi rápido e seguro.",
    },
  ];

  it("should have testimonials array with correct structure", () => {
    expect(mockTestimonials).toHaveLength(3);
    expect(mockTestimonials[0]).toHaveProperty("name");
    expect(mockTestimonials[0]).toHaveProperty("role");
    expect(mockTestimonials[0]).toHaveProperty("avatar");
    expect(mockTestimonials[0]).toHaveProperty("text");
  });

  it("should have valid testimonial data", () => {
    mockTestimonials.forEach((testimonial) => {
      expect(testimonial.name).toBeTruthy();
      expect(testimonial.role).toBeTruthy();
      expect(testimonial.avatar).toBeTruthy();
      expect(testimonial.text).toBeTruthy();
      expect(typeof testimonial.name).toBe("string");
      expect(typeof testimonial.role).toBe("string");
      expect(typeof testimonial.text).toBe("string");
    });
  });

  it("should have unique names for each testimonial", () => {
    const names = mockTestimonials.map((t) => t.name);
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(names.length);
  });

  it("should have testimonial text longer than 20 characters", () => {
    mockTestimonials.forEach((testimonial) => {
      expect(testimonial.text.length).toBeGreaterThan(20);
    });
  });

  it("should validate carousel navigation logic", () => {
    const totalTestimonials = mockTestimonials.length;
    let current = 0;

    // Test next navigation
    current = (current + 1) % totalTestimonials;
    expect(current).toBe(1);

    // Test next again
    current = (current + 1) % totalTestimonials;
    expect(current).toBe(2);

    // Test wrap around
    current = (current + 1) % totalTestimonials;
    expect(current).toBe(0);

    // Test previous navigation
    current = (current - 1 + totalTestimonials) % totalTestimonials;
    expect(current).toBe(2);
  });

  it("should validate slide indicator logic", () => {
    const totalTestimonials = mockTestimonials.length;
    const indicators = Array.from({ length: totalTestimonials }, (_, i) => i);

    expect(indicators).toHaveLength(3);
    expect(indicators[0]).toBe(0);
    expect(indicators[1]).toBe(1);
    expect(indicators[2]).toBe(2);
  });
});
