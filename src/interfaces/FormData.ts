export interface StepOneForm {
    firstName: string
    lastName: string
    phone: string
    email: string
}

export interface StepTwoForm {
    address: string
    city: string
    state: string
    zipCode: string
    latitude: string
    longitude: string
}

export interface StepThreeForm {
    username: string
    password: string
}

export type FormData = StepOneForm & StepTwoForm & StepThreeForm