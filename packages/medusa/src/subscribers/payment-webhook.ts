import { PaymentWebhookEvents } from "@medusajs/utils"

import {
  IEventBusService,
  IPaymentModuleService,
  ProviderWebhookPayload,
  Subscriber,
} from "@medusajs/types"
import { EventBusService } from "../services"

type InjectedDependencies = {
  paymentModuleService: IPaymentModuleService
  eventBusService: EventBusService
}

class PaymentWebhookSubscriber {
  private readonly eventBusService_: IEventBusService
  private readonly paymentModuleService_: IPaymentModuleService

  constructor({ eventBusService, paymentModuleService }: InjectedDependencies) {
    this.eventBusService_ = eventBusService
    this.paymentModuleService_ = paymentModuleService

    this.eventBusService_.subscribe(
      PaymentWebhookEvents.WebhookReceived,
      this.processEvent as Subscriber
    )
  }

  processEvent = async (data: ProviderWebhookPayload): Promise<void> => {
    await this.paymentModuleService_.processEvent(data)
  }
}

export default PaymentWebhookSubscriber
